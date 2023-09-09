class Section {
    constructor ({items, renderer}, selector) {
        this._items = items
        this._renderer = renderer
        this._selector = selector
    }

    // первый метод {
    //     который отвечает за отрисовку всех элементов
    //     Отрисовка каждого отдельного элемента 
    //     должна осуществляться функцией renderer
    // }

    addItem() {
        // принимает DOM-элемент и добавляет его в контейнер.
    }
}