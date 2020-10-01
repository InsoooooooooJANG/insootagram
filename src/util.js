import dotenv from "dotenv";
import path from "path";
dotenv.config({path:path.resolve(__dirname, ".env")});

import { adjectives, nouns } from "./words"
import nodemailer from "nodemailer";
import mgTransport from "nodemailer-mailgun-transport";

import jwt from "jsonwebtoken";

const MAILGUN_API = process.env.API_KEY;
const MAILGUN_DOMAIL=process.env.DOMAIN;

export const generatorSecret = () =>{
	const randomNumber = Math.floor(Math.random() * adjectives.length);	
	return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
}

export const sendMail = (email)=>{
	const options = {
		auth: {
			api_key: MAILGUN_API,
			domain:MAILGUN_DOMAIL
		}
	}
	const client = nodemailer.createTransport(mgTransport(options));
	return client.sendMail(email);
}

export const sendSecretMail = (address, secret)=>{
	const email = {
		from: "oasisholics@gmail.com",
		to:address,
		subject : "Login Secret for Insootagram",
		html:`Hello! Your login secret it is <strong>${secret}</strongs>.<br/>Copy and paste on the app/web to login`
	};
	return sendMail(email);
}

export const generateToken = (id) =>{
	return jwt.sign({id}, process.env.JWT_SECRET);
}