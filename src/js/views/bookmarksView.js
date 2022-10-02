import View from "./View.js";
import previewView from "./previewView.js";

import icons from "url:../../img/icons.svg"; // Parcel v2 // http://localhost:1234/icons.c097e590.svg

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No booksmarks yet. Find a nice recipe and bookmark it!";
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmarks) => previewView.render(bookmarks, false))
      .join();
  }
}

export default new BookmarksView();
