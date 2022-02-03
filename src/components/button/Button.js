import React from "react";
//styles
import { Arrow, Text, Content, Warrepr } from "./Button.styles";
import { useState } from "react";
//Iconns
import { BsArrowRight } from "react-icons/bs";
//animation
import { useSpring } from "react-spring";
import Face from "../face/Face";
import { interpolate } from "flubber";

const mouths = [
  "M 23.485 28.879 C 23.474 28.835 22.34 24.5 18 24.5 S 12.526 28.835 12.515 28.879 C 12.462 29.092 12.559 29.31 12.747 29.423 C 12.935 29.535 13.18 29.509 13.343 29.363 C 13.352 29.355 14.356 28.5 18 28.5 C 21.59 28.5 22.617 29.33 22.656 29.363 C 22.751 29.453 22.875 29.5 23 29.5 C 23.084 29.5 23.169 29.479 23.246 29.436 C 23.442 29.324 23.54 29.097 23.485 28.879 Z",
  "M18 21.849c-2.966 0-4.935-.346-7.369-.819-.557-.106-1.638 0-1.638 1.638 0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638-2.434.473-4.402.819-7.369.819",
];

const leftEyes = [
  "M 11.226 15.512 C 10.909 15.512 10.59 15.551 10.279 15.628 C 7.409 16.335 6.766 19.749 6.74 19.895 C 6.7 20.118 6.816 20.338 7.021 20.435 C 7.088 20.466 7.161 20.482 7.232 20.482 C 7.377 20.482 7.519 20.419 7.617 20.302 C 7.627 20.29 8.627 19.124 10.996 18.541 C 11.71 18.365 12.408 18.276 13.069 18.276 C 14.173 18.276 14.801 18.529 14.804 18.53 C 14.871 18.558 14.935 18.57 15.011 18.57 C 15.283 18.582 15.52 18.349 15.52 18.07 C 15.52 17.905 15.44 17.759 15.317 17.668 C 14.95 17.233 13.364 15.512 11.226 15.512 Z",
  "M 16.65 3.281 C 15.791 0.85 13.126 -0.426 10.694 0.431 C 9.218 0.951 8.173 2.142 7.766 3.535 C 6.575 2.706 5.015 2.435 3.541 2.955 C 1.111 3.813 -0.167 6.48 0.692 8.911 C 0.814 9.255 0.976 9.574 1.164 9.869 C 3.115 13.451 8.752 15.969 12.165 16 C 14.802 13.833 17.611 8.335 16.883 4.323 C 16.845 3.975 16.77 3.625 16.65 3.281 Z",
];

const rightEyes = [
  "M 24.774 15.512 C 25.091 15.512 25.41 15.551 25.721 15.628 C 28.591 16.335 29.234 19.749 29.26 19.895 C 29.3 20.118 29.184 20.338 28.979 20.435 C 28.912 20.466 28.839 20.482 28.768 20.482 C 28.623 20.482 28.481 20.419 28.383 20.302 C 28.373 20.29 27.373 19.124 25.004 18.541 C 24.29 18.365 23.592 18.276 22.931 18.276 C 21.827 18.276 21.2 18.529 21.196 18.53 C 21.129 18.558 21.065 18.57 20.99 18.57 C 20.718 18.582 20.481 18.349 20.481 18.07 C 20.481 17.905 20.561 17.759 20.684 17.668 C 21.05 17.233 22.636 15.512 24.774 15.512 Z",
  "M 19.35 3.281 C 20.209 0.85 22.875 -0.426 25.306 0.431 C 26.782 0.951 27.827 2.142 28.235 3.535 C 29.426 2.706 30.986 2.435 32.46 2.955 C 34.89 3.813 36.167 6.48 35.31 8.911 C 35.187 9.255 35.026 9.574 34.837 9.869 C 32.886 13.451 27.249 15.969 23.835 16 C 21.198 13.833 18.39 8.335 19.118 4.323 C 19.155 3.975 19.23 3.625 19.35 3.281 Z",
];

const Button = ({ text, arrow }) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false)
  const [interpolators, setInterpolators] = useState({
    mouth: () => mouths[index],
    leftEye: () => leftEyes[index],
    rightEye: () => rightEyes[index],
  });
  console.log(index);
  const [{ background, color, rotate }, api] = useSpring(() => ({
    background: "#aed6dc",
    color: "#000000",
    rotate: "0deg",
  }));
  return (
    <Warrepr>
      {hovered && <Face index={index} interpolators={interpolators}/>}
      <Content
        type="button"
        style={{ background, color }}
        onMouseEnter={() => {
          api.start({
            background: "#ff9a8d",
            color: "#4a536b",
            rotate: "90deg",
          });
          setHovered(true);
          setIndex((prevIndex) => {
            setInterpolators({
              mouth: interpolate(mouths[0], mouths[1], {
                maxSegmentLength: 0.5,
              }),
              rightEye: interpolate(rightEyes[0], rightEyes[1], {
                maxSegmentLength: 0.5,
              }),
              leftEye: interpolate(leftEyes[0], leftEyes[1], {
                maxSegmentLength: 0.5,
              }),
            });

            return 1;
          });
        }}
        onMouseLeave={() => {
          api.start({
            background: "#aed6dc",
            color: "#000000",
            rotate: "0deg",
          });
          setIndex((prevIndex) => {
            setInterpolators({
              mouth: interpolate(mouths[1], mouths[0], {
                maxSegmentLength: 0.5,
              }),
              rightEye: interpolate(rightEyes[1], rightEyes[0], {
                maxSegmentLength: 0.5,
              }),
              leftEye: interpolate(leftEyes[1], leftEyes[0], {
                maxSegmentLength: 0.5,
              }),
            });

            return 0;
          })
        }}
      >
        <Text style={{ color }} href="#projects">
          {text}
        </Text>
        {arrow && (
          <Arrow style={{ rotate }}>
            <BsArrowRight />
          </Arrow>
        )}
      </Content>
    </Warrepr>
  );
};

export default Button;
