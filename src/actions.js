import url from "./url"
import { redirect } from "react-router-dom"

export async function CreateAction({ request }) {
	// get the form data
	const formData = await request.formData()

	// construct new todo
		const newWord = {
			word: formData.get("word"),
			pronunciation: formData.get("pronunciation"),
			partOfSpeech: formData.get("partOfSpeech"),
			definition: formData.get("definition"),
			context: formData.get("context"),
		}

	// request to create route in backend
	await fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newWord),
	})

	// redirect back to the index page
	return redirect("/")
}

export async function UpdateAction({ request, params }) {
	// get the form data
	const formData = await request.formData()

	// construct new todo
	const updateWord = {
		word: formData.get("word"),
		pronunciation: formData.get("pronunciation"),
		partOfSpeech: formData.get("partOfSpeech"),
		definition: formData.get("definition"),
		context: formData.get("context"),
	}

	// request to update route in backend
	await fetch(url + params.id + "/", {
		method: "put",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updateWord),
	})

	// redirect back to the index page
	return redirect("/")
}

export async function DeleteAction({ params }) {
	//get the id
	const id = params.id

	// send request to delete
	await fetch(url + id + "/", {
		method: "delete",
	})

	// redirect
	return redirect("/")
}
