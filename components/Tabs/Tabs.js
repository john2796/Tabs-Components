
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`)
    this.tabItem = new TabItem(this.itemElement);
    this.links = document.querySelectorAll(".tabs-link");
    this.element.addEventListener('click', () => this.select(this.links));
  };

  select(links) {
    Array.from(links).forEach(tab =>
      tab.classList.remove("tabs-link-selected")
    );
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
}



class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const tabItems = document.querySelectorAll('.tabs-item');
    tabItems.forEach(item => {
      item.classList.remove('tabs-item-selected')
    })
    this.element.classList.add('tabs-item-selected')
  }
}


class SingleTab {
  constructor(element) {
    this.element = element;
  }
}

links = document.querySelectorAll('.tabs-link').forEach((link) => new TabLink(link)) 
