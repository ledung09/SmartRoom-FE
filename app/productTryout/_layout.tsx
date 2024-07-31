import { View, Text } from "react-native";
import React from "react";
import ProductTryoutCamera from "../productDetail/components/camera/camera";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";
import { Camera, Images } from "lucide-react-native";
import { COLOR } from "@/constants/colors";

export default function ProductTryout({ route }) {
  const image = route.params.image;
  return (
    <>
      <ProductTryoutCamera image={image} />
    </>
  );
}
