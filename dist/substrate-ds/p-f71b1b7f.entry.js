import{r as s,c as t,h as i,H as h,g as e}from"./p-1eb4e5a5.js";let l=class{constructor(i){s(this,i),this.suxMenuItemClick=t(this,"suxclick",7),this.suxChange=t(this,"suxchange",7),this.suxInput=t(this,"suxinput",7),this.suxBlur=t(this,"suxblur",7)}connectedCallback(){this._onClick=this._onClick.bind(this),this._onInput=this._onInput.bind(this)}_onClick(s){this.selected=s.target.checked,this.suxChange.emit(this.selected)}_onInput(s){this.value=s.target.value,this.suxInput.emit()}render(){return i(h,null,i("slot",null))}get el(){return e(this)}};l.style=":host{display:block}";export{l as sux_menu_item}