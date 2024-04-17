import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// async function authorLogin(req, res) {
//   // const author = req.body;
//   const authorData = {
  
//     authorName: "samuel ian",
//     authorEmail: "authormail@gmail.com",
//   };
//   try {
//     let token = jwt.sign(authorData, "samuel_douglas_othieno", { expiresIn: "7h" });
//     res.status(StatusCodes.OK).json({ token });
//   } catch (error) {
//     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Operation Failure! Please try again."});
//   }
// }

async function findUniqueAuthor(req, res) {
  const uniqueEmail = req.body.email;

  try {
    if (!uniqueEmail) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Invalid email address" });
    }

    const uniqueAuthorExits = await prisma.author.findUnique({
      where: {
        email: uniqueEmail,
      },
    });

    if (!uniqueAuthorExits) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Author not found" });
    } else {
      res
        .status(StatusCodes.ACCEPTED)
        .json({ message: "SUCCESS! Authors found", uniqueAuthorExits });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Operation failure! Please try again" });
  }
}

async function findAuthors(req, res) {
  try {
    const author = await prisma.author.findMany();
    res
      .status(StatusCodes.ACCEPTED)
      .json({ message: "SUCCESS! Authors found", author });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Operation failure! Please try again" });
  }
}

async function createNewAuthor(req, res) {
  const email = req.body.email;
  try {
    const author = await prisma.author.findUnique({
      where: {
        email: email,
      },
    });

    if (author != null && author.email === email) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Email already in use" });
    } else {
      const newAuthor = await prisma.author.create({
        data: req.body,
      });
      res
        .status(StatusCodes.CREATED)
        .json({ message: "SUCCESS! New Author added", newAuthor });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Operation failure! Please try again" });
  }
}

async function deleteAuthor(req, res) {
  try {
    const author = await prisma.author.deleteMany({});
    res
      .status(StatusCodes.OK)
      .json({ message: "SUCCESS! Authors deleted", author });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Operation failure! Please try again" });
  }
}

async function updateAuthor(req, res) {
  const { uniqueEmail, newEmail } = req.body;

  try {
    if (!newEmail) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "New email required" });
    }

    if (!uniqueEmail) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Unique email required" });
    }

    if (newEmail === uniqueEmail) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ message: "New email can not be the same as existing" });
    }

    const existingAuthor = await prisma.author.findUnique({
      where: {
        email: newEmail,
      },
    });
    const noExistingAuthor = await prisma.author.findUnique({
      where: {
        email: uniqueEmail,
      },
    });

    if (!noExistingAuthor) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "Author not found" });
    }

    if (existingAuthor) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Email already exists" });
    } else {
      const author = await prisma.author.update({
        where: {
          email: uniqueEmail,
        },
        data: {
          email: newEmail,
        },
      });
      res
        .status(StatusCodes.ACCEPTED)
        .json({ message: "SUCCESS! Author updated", author });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Operation failed" });
  }
}

async function deleteUniqueAuthor(req, res) {
  const authorEmail = req.body.email;
  try {
    if (!authorEmail) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Email required" });
    }

    const authorExists = await prisma.author.findUnique({
      where: {
        email: authorEmail,
      },
    });

    if (!authorExists) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Author not found" });
    } else {
      await prisma.author.delete({
        where: {
          email: authorEmail,
        },
      });
      res.status(StatusCodes.OK).json({ message: "SUCCESS! Author deleted" });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Operation failure! Please try again" });
  }
}

export {
  findUniqueAuthor,
  findAuthors,
  updateAuthor,
  createNewAuthor,
  deleteAuthor,
  deleteUniqueAuthor,
  authorLogin,
};
