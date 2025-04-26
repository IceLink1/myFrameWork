const Vdom = {
  tag: "div",
  props: {
    class: "container",
  },
  children: [
    {
      tag: "h1",
      props: {
        title: "This is title",
      },
      children: [],
    },
    {
      tag: "p",
      props: {
        class: "description",
      },
      children: [],
    },
  ],
};

function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}

function mount(vnode, container) {
  const el = document.createElement(vnode.tag);
  for (const keys in vnode.props) {
    el.setAttrebute(keys, vnode.props[keys]);
  }

  if (typeof vnode.children === "string") {
    el.textContent = vnode.children;
  } else {
    vnode.children.forEach((child) => {
      mount(child, el);
    });
  }

  container.appendChild(el);
  vnode.$el = el;
}

function unMount(vnode) {
  vnode.$el.preventNode.removeChild(vnode.$el);
}

function patch(n1, n2) {
  if (n1.tag !== n2.tag) {
    mount(n2, n1.$el.prentNode);
    unMount(n1);
  } else {
    n2.$el = n1.$el;
    if (typeof n2.children === "string") {
      n2.$el.textContent = n2.child;
    } else {
      while (n2.$el.attrebutes.length > 0) {
        n2.$el.removeAtterbute(n2.$el.attrebutes[0].name);

        for (const keys in n2.props) {
          n2.$el.setAttrebute(keys, n2.props[keys]);
        }

        if (typeof n1.children === "string") {
          n2.$el.textContent = null;
          n2.children.forEach((child) => {
            mount(child, n2.$el);
          });
        }else{
            
        }
      }
    }
  }
}
