import React from 'react';
import "../style.css/ContentStyle.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import product from "../assets/logo-css.png";

function Contents(){
    return (
    <section id="content">
        <section id="cards">
            <div className="card">
                <div className="-thumb1">
                    <img src="https://via.placeholder.com/780x270" alt="banner" />
                </div>
                <div className="-thumb2">
                    <img src="https://via.placeholder.com/413x132" alt="banner" />
                </div>
                <div className="-thumb3">
                    <img src="https://via.placeholder.com/413x132" alt="banner" />
                </div>
            </div>
            <div className="row-type">
                <div className="type-item">
                    <div className="icon-img">
                        <div className="icon-type">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                        </div>
                    </div>
                    <div className="name-item">
                        อิเล็กทรอนิกส์
                    </div>
                </div>
                <div className="type-item">
                    <div className="icon-img">
                        <div className="icon-type">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                        </div>
                    </div>
                    <div className="name-item">
                        เสื้อผ้า
                    </div>
                </div>
                <div className="type-item">
                    <div className="icon-img">
                        <div className="icon-type">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                        </div>
                    </div>
                    <div className="name-item">
                        ของเล่น
                    </div>
                </div>
                <div className="type-item">
                    <div className="icon-img">
                        <div className="icon-type">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                        </div>
                    </div>
                    <div className="name-item">
                        รองเท้า
                    </div>
                </div>
                <div className="type-item">
                    <div className="icon-img">
                        <div className="icon-type">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                        </div>
                    </div>
                    <div className="name-item">
                        ส่งฟรี + โค้ดลดทั้งแอป
                    </div>
                </div>
                <div className="type-item">
                    <div className="icon-img">
                        <div className="icon-type">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                        </div>
                    </div>
                    <div className="name-item">
                        เก็บคอยน์แลกโค้ด
                    </div>
                </div>
                <div className="type-item">
                    <div className="icon-img">
                        <div className="icon-type">
                            <img src="https://via.placeholder.com/50x50" alt="" />
                        </div>
                    </div>
                    <div className="name-item">
                        Super Market ลดสูงสุด 90%
                    </div>
                </div>
            </div>
        </section>
        <section id="promo">
            <div className="ban-pro">
                <div className="pro-1">
                    <img src="https://via.placeholder.com/1200x120" alt="banner" />
                </div>
            </div>
                <div className="pro-2">
                    <img src="https://via.placeholder.com/1200x290" alt="banner" />
                </div>
                <div className="pro-3">
                    <img src="https://via.placeholder.com/1200x190" alt="banner" />
                </div>
        </section>
        <section id="product">
            <div className="pduct">
                <Card sx={{ maxWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200px"
                        image="https://via.placeholder.com/200x200" /* or {product} */
                        alt="green iguana"
                        />
                        <CardContent>
                            {/* <Typography gutterBottom variant="h6" component="div">
                                Lizard
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 200 }} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200px"
                        image="https://via.placeholder.com/200x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 200 }} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200px"
                        image="https://via.placeholder.com/200x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 200 }} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200px"
                        image="https://via.placeholder.com/200x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 200 }} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200px"
                        image="https://via.placeholder.com/200x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 200 }} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200px"
                        image="https://via.placeholder.com/200x200"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </section>
    </section>
    )
}

export default Contents;