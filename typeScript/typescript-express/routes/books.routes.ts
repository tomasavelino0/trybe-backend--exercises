// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controller/book.controllers';
const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);


export default router;