import React, { Component } from 'react'

import MenuCon from '../MenuCon/MenuCon.js';
export default class Menu extends Component {
    render() {
        return (
<div>
  {/* start chi tiết */}
  <br /><br />
      <h1>MENU</h1><br />
  <div className="row">
      <MenuCon anh="img/bac-siu.png"        nameCafe="Bạc xỉu"              giaCafe="18.000đ"></MenuCon>
      <MenuCon anh="img/kem.jpg"            nameCafe="Kem dâu"              giaCafe="20.000đ"></MenuCon>
      <MenuCon anh="img/cafe-sua-da.jpg"    nameCafe="Cafe sữa đá"          giaCafe="12.000đ"></MenuCon>
      <MenuCon anh="img/cf-chon.jpg"        nameCafe="Cafe chồn"            giaCafe="18.000đ"></MenuCon>
      
      <MenuCon anh="img/klc.jpg"            nameCafe="Khoai lang chiên"     giaCafe="20.000đ"></MenuCon>
      <MenuCon anh="img/kt.jpg"             nameCafe="Kem tươi"             giaCafe="25.000đ"></MenuCon>
      <MenuCon anh="img/my-cay.jpg"         nameCafe="Mỳ cay"               giaCafe="35.000đ"></MenuCon>
      <MenuCon anh="img/my-cay-hs.jpg"      nameCafe="Mỳ cay hải sản"       giaCafe="40.000đ"></MenuCon>

      <MenuCon anh="img/pm.jpg"             nameCafe="Phô mai que"          giaCafe="15.000đ"></MenuCon>
      <MenuCon anh="img/sc.jpg"             nameCafe="Sữa chua"             giaCafe="10.000đ"></MenuCon>
      <MenuCon anh="img/tra-dao.jpg"        nameCafe="Trà đào"              giaCafe="15.000đ"></MenuCon>
      <MenuCon anh="img/tscc.png"           nameCafe="Trà sữa truyền thống" giaCafe="25.000đ"></MenuCon>

      <MenuCon anh="img/vien-xien.jpg"      nameCafe="Viên xiên chiên"      giaCafe="20.000đ"></MenuCon>
      <MenuCon anh="img/xuc-xich.jpg"       nameCafe="Xúc xích"             giaCafe="25.000đ"></MenuCon>
      <MenuCon anh="img/btt.jpg"            nameCafe="Bánh tráng trộn"      giaCafe="15.000đ"></MenuCon>
      <MenuCon anh="img/bac-siu.png"        nameCafe="Bạc xỉu"              giaCafe="18.000đ"></MenuCon>
  </div>
  {/* end chi tiết */}</div>

        )
    }
}
