/* 监控部分 */
// 获取标题
let controlTitleItem = document.getElementsByClassName("control-title-item");
// 获取内容
// 获取内容头部
let controlHeaderLists = document.getElementsByClassName("control-header-list");
// 获取主要内容
let controlMains = document.getElementsByClassName("control-main");
// 遍历标题数组
for (let i = 0; i < controlTitleItem.length; i++) {
  // 添加点击事件
  controlTitleItem[i].addEventListener("click", function () {
    // 排他法
    for (let j = 0; j < controlTitleItem.length; j++) {
      // 全部的标题都删除选中类名
      controlTitleItem[j].classList.remove("control-title-active");
      // 全部的内容头部都添加隐藏类名
      controlHeaderLists[j].classList.add("control-hidden");
      // 全部的主要内容都添加隐藏类名
      controlMains[j].classList.add("control-hidden");
    }
    // 当前的标题都添加选中类名
    this.classList.add("control-title-active");
    // 当前的内容头部都删除隐藏类;
    controlHeaderLists[i].classList.remove("control-hidden");
    // 当前的主要内容都删除隐藏类;
    controlMains[i].classList.remove("control-hidden");
  });
}
