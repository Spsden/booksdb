
const asyncWrapper = require("../middleware/async_wrapper");
const DataNotFound = require("../errors/data_not_found");
const LibrarySchema = require("../models/library")

const { StatusCodes } = require("http-status-codes");


const getAllBooks = async (req, res) => {
  console.log("came here")
  const { search, page } = req.query;

 
};


const createLibrary = async (req, res) => {
//  req.body.createdBy = req.user.userId;
  const library = await LibrarySchema.create(req.body);

  
  res.status(StatusCodes.CREATED).json({ library });
};

const getLibrary = async (req, res) => {
  const {
    
    params: { id: libraryID },
  } = req;
  // const { id: taskID } = req.params;
  const library = await Books.findOne({ _id: libraryID});
  if (!library) {
    throw new DataNotFound(`No library with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ library });
};

// const updateLibrary = async (req, res) => {
//   const {
//     body: { body },
    
//     params: { id: libraryID },
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

// const deleteBook = async (req, res) => {
//   try {
//     const {
//       user: { userId },
//       params: { id: taskID },
//     } = req;
//     const book = await Books.findByIdAndRemove({
//       _id: taskID,
//       createdBy: userId,
//     });

//     if (!book) {
//       throw new DataNotFound(`No task with id : ${taskID}`);
//     }

//     res.status(StatusCodes.OK).json({ book });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getLibrary,
  createLibrary
};
