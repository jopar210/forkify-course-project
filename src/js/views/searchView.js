class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query = this._parentEl.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
  }

  addHandelerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      // We cannot call the function as a callback function
      // We want to prevent the default behaviour first
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
