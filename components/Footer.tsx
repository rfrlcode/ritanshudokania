"use client"

import Link from "next/link"
import {useTheme} from "next-themes"
import {Button} from "./ui/button"
import Container from "./ui/container"
import { Sun, Moon, Linkedin } from "lucide-react";
import { Menu } from "lucide-react";

const Footer = () => {
    const{theme, setTheme } = useTheme();
    return (
    <header>
        <Container>
        <div className="flex items-center justify-between py-12">

        </div>
        </Container>
    </header>
  )
}

export default Footer