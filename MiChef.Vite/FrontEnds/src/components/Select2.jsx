import "./Select2.scss";
import React from "react";

const defaultOption = {
  width: "resolve",
  minimumResultsForSearch: Infinity,
};

class Select2 extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.callSelect2();
  }

  componentDidUpdate(prevProps) {
    // console.log("did-mount");
    if (prevProps.children !== this.props.children) {
      this.$el.select2("destroy");
      this.callSelect2();
    }
  }

  callSelect2() {
    this.$el.select2(defaultOption);
    const s2 = this.$el.next(".select2")[0];
    // const e2 = s2.querySelector(".select2-selection__arrow");
    const a2 = $(s2).find(".select2-selection__arrow")[0];
    a2.innerHTML = '<i class="bi bi-chevron-down"></i>';
    // console.log("s2 = ", s2, a2);

    this.$el.on("change", this.handleChange);
  }

  componentWillUnmount() {
    // console.log("unmount");
    this.$el.off("change", this.handleChange);
    this.$el.select2("destroy");
  }

  handleChange = (e) => {
    // console.log(e.target.value);
  };

  render() {
    const className = this.props.className || "";
    // console.log("className = ", className);
    const style = this.props.style || {};
    return (
      <select className={className} style={style} ref={(el) => (this.el = el)}>
        {this.props.children}
      </select>
    );
  }
}

export default Select2;
