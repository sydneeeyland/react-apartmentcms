import React from 'react'
import { Image } from '../../../Assets';

function Carousel() {
  return (
    <React.Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Home
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <span className='text-primary'>Carousel</span>
            </li>
          </ol>
        </nav>
        <section className='row'>
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title">Carousel</h6>
                <p className="text-muted mb-3"><code>Featured image in website.</code></p>
                <div className='row col-12'>
                  <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                    <p className="text-muted mb-3"><code>Stored images.</code></p>

                    <div id='gallery' className='col-12 row'>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2 active-image'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay float-end">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>

                      <div className='col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6 col-6 mb-2'>
                        <div id='image-gallery' className="card bg-light text-white">
                          <img className="card-img" height="150px" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221149%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201149%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18175ac3f92%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A57pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18175ac3f92%22%3E%3Crect%20width%3D%221149%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22410.3828125%22%20y%3D%22160.5%22%3E1149x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                          <div className="overlay">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                    <p className="text-muted mb-3"><code>Preview.</code></p>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators d-none">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>

                          <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>

                          <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

                          <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                          </div>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}

export default Carousel