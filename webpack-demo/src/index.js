function component() {
  let element = document.createElement('div');

  //Lodash(目前通过一个script脚本引入)
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());