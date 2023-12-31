import React from "react";
import { baseUrl } from '@/config/appConfig';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCartList, setAddCart } from '@/lib/reduxStore/slices/storeSlice';

interface CartProps {
    product?: any;
}

const ProductCard = (props: CartProps) => {

    const { product } = props;

    console.log('product', product)

    const dispatch = useDispatch();

    const addCart = (data: any) => {
        dispatch(setAddCart({ ...data, quantity: 1 }));
    }

    return (
        <div className="w-full h-[410px] flex items-center justify-content-center">
            <div className="w-full h-[410px]">
                {/* product image */}
                <Link
                    href={`${baseUrl}/product/${product?.slug}`}
                    className="w-full relative overflow-hidden cursor-pointer h-[272px] flex items-center justify-content-center mx-auto"
                >
                    <img src={`${baseUrl}/${product?.images[0]?.image}`} alt="" className="w-full" style={{ height: "272px" }} />
                    <div className="absolute inset-0 flex items-center justify-center space-x-1 bg-black/20 opacity-0 group-hover:opacity-100 transition">
                        <a
                            href="#"
                            className="w-8 h-8 rounded-full bg-accentOne p-2 flex items-center justify-center"
                        >
                            <i className="fa-solid fa-magnifying-glass" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 rounded-full bg-accentOne p-2 flex items-center justify-center"
                        >
                            <i className="fa-regular fa-heart" />
                        </a>
                    </div>
                </Link>
                {/* product image */}

                {/* Product description */}
                <div className="w-full">
                    <Link href={`${baseUrl}/product/${product?.slug}`}>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">{product?.title}</h3>
                    </Link>

                    {/* Product Price */}
                    <div className="w-full flex items-center space-x-3 pl-3">
                        <h4 className="text-paragraph font-medium text-lg">${product?.price}</h4>
                    </div>
                    {/* Product Price */}

                    {/* Product Rating*/}
                    {/* <div className="flex items-center space-x-3 pl-3 pb-3">
                        <span className="flex">
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                        </span>
                        <div>
                            <p className="text-paragraph">(150)</p>
                        </div>
                    </div> */}
                    {/* Product Rating*/}
                    <div className="w-full mt-5">
                        <button
                            onClick={() => addCart(product)}
                            className="w-full h-13 bottom-0 text-primary border border-accentOne block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
                {/* Product description */}
            </div>
        </div>

    );
}

export default ProductCard;
