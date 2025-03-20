import Card from "./Card";
import React from "react";
function Home(){
     return(
        <div className="App main">
        <h1>PC GAMING</h1>
        <div className='card-container'>
          <Card src="https://product.hstatic.net/1000288298/product/dsc01962_82292de4a5db421192d46d563989e690_large.jpg" cardTitle="PC FASTER GAMING 10400F - RTX 3050 6GB" cardText="9,990,000đ" price={9990000} id="1" />
          <Card src="https://product.hstatic.net/1000288298/product/dsc03886_2_fe261d7a9e75446492cf913fe83d06ba_large.jpg" cardTitle="PC BEST FOR GAMING i5 10400F- GTX 1660 Super 6GB" cardText="10,990,000đ" price={10990000} id="2"/>
          <Card src="https://product.hstatic.net/1000288298/product/dsc03842_63a702c1af704eebae9adaa8e854db6a_large.jpg" cardTitle="PC CHƠI GAME HIỆU SUẤT CAO RTX 3060 12GB - 12400F" cardText="15,280,000đ" price={15280000} id='3'/>
          <Card src="https://product.hstatic.net/1000288298/product/pc-gaming-i5-12400f-rtx-4060-8gb-black_pcm__cc9205a2894c46e3873c230db82d781e_large.jpg" cardTitle="PC ASUS GAMING PERFORMANCE RTX 4060 - I5 12400F" cardText="15,680,000đ" price={15680000} id='4'/>
          <Card src="https://product.hstatic.net/1000288298/product/dsc09846_80b0a3dbb25e49d09bc86dc94bd27a9d_large.jpg"cardTitle="PC MAXIMUM GAMING RTX 3070-12400F" cardText="17,980,000đ" price={17980000} id='5'/>
        </div>
        <div className='card-container'>
          <Card src="https://product.hstatic.net/1000288298/product/pc_5090_8f71e305fa744713940a9d7009a42b03_large.jpg" cardTitle="PC Đồ Họa 2D i5 12400F - GTX 1650 4GB " cardText="10,980,000đ" price={10980000} id='6'/>
          <Card src="https://product.hstatic.net/1000288298/product/dsc07156_ff1012c8cee04a8f99bc07dcdd07873d_large.jpg" cardTitle="PC Đồ Họa 2D i5 12400F - GTX 1660 Super 6GB" cardText="12,680,000đ" price={12680000} id='7'/>
          <Card src="https://product.hstatic.net/1000288298/product/dsc07171_03750644895e4bd5a53e6ab29d2f0e7a_large.jpg" cardTitle="PC Đồ Họa 2D-3D i5 12400F- RTX 3050 6GB OC" cardText="12,680,000đ" price={12680000} id='8'/>
          <Card src="https://product.hstatic.net/1000288298/product/pc_do_hoa_916527c66b92463f9fb0e355a865a923_large.jpg" cardTitle="PC Workstation 2D 3D- Edit Video i5 12600K - RTX 3050 6GB OC" cardText="15,680,000đ" price={15680000} id='9'/>
          <Card src="https://product.hstatic.net/1000288298/product/dsc07156_83760289bdf14b5cb587ae2be790c747_large.jpg" cardTitle="PC Đồ Họa Hiệu Suất Cao i5 14500-GTX 1660 Super 6GB" cardText="16,680,000đ" price={16680000} id='10'/>
        </div>
      </div> 
     )
}
export default Home;