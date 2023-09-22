const Books = require("../models/books");
const asyncWrapper = require("../middleware/async_wrapper");
const DataNotFound = require("../errors/data_not_found");

const { StatusCodes } = require("http-status-codes");


const getAllBooks = async (req, res) => {
  console.log("came here")
  const books = await Books.find({ book_title: 'Nights Below Station Street'});
  console.log(books)

  res.status(StatusCodes.OK).json({ Books, count: books.length });
};
function haha(task) {
  console.log(task)
  
}

const createBook = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const book = await Task.create(req.body);

  // try {
  //  // haha(task);
  //   runCronTask(task);
    
    
  // } catch (e) {
  //   console.log(e)
    
  // }
  res.status(StatusCodes.CREATED).json({ book });
};

const getBook = async (req, res) => {
  const {
    user: { userId },
    params: { id: taskID },
  } = req;
  // const { id: taskID } = req.params;
  const book = await Books.findOne({ _id: taskID, createdBy: userId });
  if (!book) {
    throw new DataNotFound(`No task with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ book });
};

// const updateTask = async (req, res) => {
//   const {
//     body: { body },
//     user: { userId },
//     params: { id: taskId },
//   } = req;
//   console.log(body);

//   for (let key in body) {
//     if (body.hasOwnProperty(key)) {
//       if (body[key] === "") {
//         throw new BadRequestError(` ${key} field(s) cannot be empty`);
//       }
//     }
//   }
//   // console.log("yaha aya")

//   //console.log(req.body)
//   try {
//     // const { id: taskId } = req.params;
//     const task = await Task.findByIdAndUpdate(
//       { _id: taskId, createdBy: userId },
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     if (!task) {
//       throw new DataNotFound(`No task with ${taskId}`);
//     }
//     res.status(StatusCodes.OK).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const deleteBook = async (req, res) => {
  try {
    const {
      user: { userId },
      params: { id: taskID },
    } = req;
    const book = await Books.findByIdAndRemove({
      _id: taskID,
      createdBy: userId,
    });

    if (!book) {
      throw new DataNotFound(`No task with id : ${taskID}`);
    }

    res.status(StatusCodes.OK).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllBooks,
  // createTask,
  // getTask,
  // updateTask,
  // deleteTask,
};
