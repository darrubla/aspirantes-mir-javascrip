const menu = [
  {
    name: 'Home',
    link: '/',
    items: [],
  },
  {
    name: 'About',
    link: '/about',
    items: [],
  },
  {
    name: 'Products',
    link: '/products',
    items: [
      {
        name: 'Product 1',
        link: '/products/1',
        items: [],
      },
      {
        name: 'Product 2',
        link: '/products/2',
        items: [
          {
            name: 'Product 2.1',
            link: '/products/2/1',
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Services',
    link: '/services',
    items: [
      {
        name: 'Service 1',
        link: '/services/1',
        items: [
          {
            name: 'Service 1.1',
            link: '/services/1/1',
            items: [],
          },
        ],
      },
      {
        name: 'Service 2',
        link: '/services/2',
        items: [
          {
            name: 'Service 2.1',
            link: '/services/2/1',
            items: [],
          },
          {
            name: 'Service 2.2',
            link: '/services/2/2',
            items: [],
          },
        ],
      },
    ],
  },
]

const body = document.getElementsByTagName('body')[0]

function createListContainer() {
  const el = '<ul id="menu-container"></ul>'
  body.innerHTML = el
}

function createListElement() {
  const listContainer = document.getElementById('menu-container')
  let toShow = ''
  menu.forEach((item) => {
    if (item?.items?.length) {
      let innerList = ''
      item.items.forEach((innerItem) => {
        innerList += `<li id="${innerItem.name}">${innerItem.name}</li>`
      })
      toShow += `
      <li>
        ${item.name}
        <button name="btn-${item.name}" onclick="handleClick('${item.name}')">show</button>
        <ul id="${item.name}">${innerList}</ul>
      </li>`
    } else {
      toShow += `<li id="${item.name}">${item.name}</li>`
    }
  })
  listContainer.innerHTML = toShow
}

function handleClick(item) {
  const innerList = document.getElementById(item)
  const btn = document.getElementsByName(`btn-${item}`)[0]
  innerList.classList.toggle('active')
  const classes = Array.from(innerList.classList)
  if (classes.includes('active')) {
    btn.innerHTML = 'hide'
  } else {
    btn.innerHTML = 'show'
  }
}

createListContainer()
createListElement()
