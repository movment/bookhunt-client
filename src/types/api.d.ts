/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetReviews
// ====================================================

export interface GetReviews_GetReviews_reviews_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface GetReviews_GetReviews_reviews {
  __typename: "Review";
  id: number;
  comment: string;
  user: GetReviews_GetReviews_reviews_user | null;
}

export interface GetReviews_GetReviews {
  __typename: "GetReviewsResponse";
  ok: boolean;
  error: string | null;
  reviews: (GetReviews_GetReviews_reviews | null)[] | null;
}

export interface GetReviews {
  GetReviews: GetReviews_GetReviews;
}

export interface GetReviewsVariables {
  bookId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddReview
// ====================================================

export interface AddReview_AddReview {
  __typename: "AddReviewResponse";
  ok: boolean;
  error: string | null;
}

export interface AddReview {
  AddReview: AddReview_AddReview;
}

export interface AddReviewVariables {
  bookId: number;
  comment: string;
  rating: Rating;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DelReview
// ====================================================

export interface DelReview_DelReview {
  __typename: "DelReviewResponse";
  ok: boolean;
  error: string | null;
}

export interface DelReview {
  DelReview: DelReview_DelReview;
}

export interface DelReviewVariables {
  reviewId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBook
// ====================================================

export interface GetBook_GetBooks_books {
  __typename: "Book";
  isFav: boolean | null;
  id: number;
  title: string;
  link: string | null;
  image: string | null;
  author: string;
  translator: string | null;
  publisher: string | null;
  pubdate: string | null;
  description: string | null;
}

export interface GetBook_GetBooks {
  __typename: "GetBooksResponse";
  ok: boolean;
  error: string | null;
  books: (GetBook_GetBooks_books | null)[] | null;
}

export interface GetBook_GetListsOfBook_lists_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface GetBook_GetListsOfBook_lists {
  __typename: "List";
  id: number;
  title: string;
  user: GetBook_GetListsOfBook_lists_user;
}

export interface GetBook_GetListsOfBook {
  __typename: "GetListsOfBookResponse";
  lists: (GetBook_GetListsOfBook_lists | null)[] | null;
}

export interface GetBook {
  GetBooks: GetBook_GetBooks;
  GetListsOfBook: GetBook_GetListsOfBook;
}

export interface GetBookVariables {
  bookId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddFavorite
// ====================================================

export interface AddFavorite_AddFavorite {
  __typename: "AddFavoriteResponse";
  ok: boolean;
  error: string | null;
}

export interface AddFavorite {
  AddFavorite: AddFavorite_AddFavorite;
}

export interface AddFavoriteVariables {
  bookId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListsOfBook
// ====================================================

export interface GetListsOfBook_GetListsOfBook_lists {
  __typename: "List";
  id: number;
  title: string;
}

export interface GetListsOfBook_GetListsOfBook {
  __typename: "GetListsOfBookResponse";
  lists: (GetListsOfBook_GetListsOfBook_lists | null)[] | null;
}

export interface GetListsOfBook {
  GetListsOfBook: GetListsOfBook_GetListsOfBook;
}

export interface GetListsOfBookVariables {
  bookId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchBooks
// ====================================================

export interface SearchBooks_SearchBooks_books {
  __typename: "Book";
  id: number;
  title: string;
  image: string | null;
  author: string;
  publisher: string | null;
}

export interface SearchBooks_SearchBooks {
  __typename: "SearchBooksResponse";
  ok: boolean;
  error: string | null;
  books: (SearchBooks_SearchBooks_books | null)[] | null;
}

export interface SearchBooks {
  SearchBooks: SearchBooks_SearchBooks;
}

export interface SearchBooksVariables {
  max?: number | null;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBookInList
// ====================================================

export interface AddBookInList_AddBookInList {
  __typename: "AddBookInListResponse";
  ok: boolean;
  error: string | null;
}

export interface AddBookInList {
  AddBookInList: AddBookInList_AddBookInList;
}

export interface AddBookInListVariables {
  listId: number;
  bookId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBooksInList
// ====================================================

export interface GetBooksInList_GetBooksInList_books {
  __typename: "Book";
  id: number;
  title: string;
  author: string;
  image: string | null;
}

export interface GetBooksInList_GetBooksInList_list_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface GetBooksInList_GetBooksInList_list {
  __typename: "List";
  title: string;
  user: GetBooksInList_GetBooksInList_list_user;
}

export interface GetBooksInList_GetBooksInList {
  __typename: "GetBooksInListResponse";
  ok: boolean;
  error: string | null;
  books: (GetBooksInList_GetBooksInList_books | null)[] | null;
  list: GetBooksInList_GetBooksInList_list | null;
}

export interface GetBooksInList {
  GetBooksInList: GetBooksInList_GetBooksInList;
}

export interface GetBooksInListVariables {
  listId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLists
// ====================================================

export interface GetLists_GetLists_lists {
  __typename: "List";
  id: number;
  title: string;
}

export interface GetLists_GetLists {
  __typename: "GetListsResponse";
  ok: boolean;
  error: string | null;
  lists: (GetLists_GetLists_lists | null)[] | null;
  max: number | null;
}

export interface GetLists {
  GetLists: GetLists_GetLists;
}

export interface GetListsVariables {
  type?: options | null;
  sort?: SortOptions | null;
  page?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBookList
// ====================================================

export interface AddBookList_AddBookList_list {
  __typename: "List";
  id: number;
  title: string;
}

export interface AddBookList_AddBookList {
  __typename: "AddBookListResponse";
  ok: boolean;
  error: string | null;
  list: AddBookList_AddBookList_list | null;
}

export interface AddBookList {
  AddBookList: AddBookList_AddBookList;
}

export interface AddBookListVariables {
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchDetail
// ====================================================

export interface SearchDetail_SearchBooks_books {
  __typename: "Book";
  id: number;
  title: string;
  image: string | null;
  author: string;
  publisher: string | null;
  description: string | null;
}

export interface SearchDetail_SearchBooks {
  __typename: "SearchBooksResponse";
  books: (SearchDetail_SearchBooks_books | null)[] | null;
}

export interface SearchDetail {
  SearchBooks: SearchDetail_SearchBooks;
}

export interface SearchDetailVariables {
  max?: number | null;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignIn
// ====================================================

export interface SignIn_SignIn {
  __typename: "SignInResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SignIn {
  SignIn: SignIn_SignIn;
}

export interface SignInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUp
// ====================================================

export interface SignUp_SignUp {
  __typename: "SignUpResponse";
  ok: boolean;
  error: string | null;
}

export interface SignUp {
  SignUp: SignUp_SignUp;
}

export interface SignUpVariables {
  name: string;
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBooks
// ====================================================

export interface GetBooks_GetBooks_books {
  __typename: "Book";
  id: number;
  title: string;
  image: string | null;
  author: string;
  link: string | null;
}

export interface GetBooks_GetBooks {
  __typename: "GetBooksResponse";
  ok: boolean;
  error: string | null;
  books: (GetBooks_GetBooks_books | null)[] | null;
  max: number | null;
}

export interface GetBooks {
  GetBooks: GetBooks_GetBooks;
}

export interface GetBooksVariables {
  sort?: SortOptions | null;
  page: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllList
// ====================================================

export interface GetAllList_GetLists_lists_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface GetAllList_GetLists_lists {
  __typename: "List";
  id: number;
  title: string;
  user: GetAllList_GetLists_lists_user;
}

export interface GetAllList_GetLists {
  __typename: "GetListsResponse";
  ok: boolean;
  error: string | null;
  max: number | null;
  lists: (GetAllList_GetLists_lists | null)[] | null;
}

export interface GetAllList {
  GetLists: GetAllList_GetLists;
}

export interface GetAllListVariables {
  type?: options | null;
  sort?: SortOptions | null;
  page?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Rating {
  FIVE = "FIVE",
  FOR = "FOR",
  ONE = "ONE",
  THREE = "THREE",
  TWO = "TWO",
}

export enum SortOptions {
  PUBDATE = "PUBDATE",
  VIEWS = "VIEWS",
}

export enum options {
  ALL = "ALL",
  MY = "MY",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
