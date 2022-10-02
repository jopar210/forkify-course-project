import View from "./View.js";
import previewView from "./previewView.js";

import icons from "url:../../img/icons.svg"; // Parcel v2 // http://localhost:1234/icons.c097e590.svg

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again";
  _message = "";

  _generateMarkup() {
    return this._data
      .map((results) => previewView.render(results, false))
      .join();
  }
}

export default new ResultsView();
