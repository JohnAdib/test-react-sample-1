import React from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  render() {
    const { data } = this.props;

    // console.log(data);
    const boardOptions = data;

    // const boardOptions = data.filter(function (el, index) {
    //   return el;
    //   return index !== "lists";
    // });

    let pageStyle =
      "h-screen select-none flex flex-col bg-[" + boardOptions.background + "]";
    // bg-[#0079bf] bg-[#00aecc]

    return (
      <div className={pageStyle}>
        <BoardHeader
          data={boardOptions}
          onChangeBoardTitle={data.events.onChangeBoardTitle}
        />
        <BoardLists data={data.lists} />
      </div>
    );
  }
}

export default BoardTemplate;
