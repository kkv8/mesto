


class Section {
    constructor ({ data, renderer }, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = containerSelector
    }

    addItem(element) {
      this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
      }

    renderItems () {
        this._clear

        this._renderedItems.forEach(item => {
          this._renderer(item)
            
          });
         
    }

}

export default Section