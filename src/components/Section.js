
import { handleCardClick, createNewCard } from "../utils/utils";
class Section {
    constructor ({ data }, containerSelector) {
        this._renderedItems = data;
        this._container = containerSelector
    }

    setItem(element) {
      this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
      }

    addItem () {
        this._clear

        this._renderedItems.forEach(item => {
            const cardElement = createNewCard(item,
                  ".card-template_type_default",
                  handleCardClick)
           
            this.setItem(cardElement)
            
          });
         
    }

}

export default Section