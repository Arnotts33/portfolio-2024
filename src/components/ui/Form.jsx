import { useState } from "react";
import Swal from "sweetalert2";
import styles from "./Form.module.css";

function Form() {
	const onSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		formData.append("access_key", "9013f961-9792-4abe-b3a7-7462e30d1915");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			Swal.fire({
				title: "Success!",
				text: "Message sent successfully!",
				icon: "success",
			});
		} else {
			Swal.fire({
				title: "Error!",
				text: "Something went wrong!",
				icon: "error",
			});
		}
	};

	return (
		<>
			<form
				className={styles.contact__form}
				name="contact"
				method="POST"
				onSubmit={onSubmit}
			>
				<div className={styles.form__input_box_container}>
					<input
						type="text"
						placeholder="Your Name"
						className={styles.contact__form_input}
						name="name"
						required
					/>
					<input
						type="email"
						placeholder="Your Email"
						className={styles.contact__form_input}
						name="email"
						required
					/>
				</div>
				<div className={styles.textarea_container}>
					<textarea
						placeholder="Your Message"
						className={styles.contact__form_input}
						rows={8}
						name="message"
						required
					></textarea>
				</div>
				<button className="btn button--primary">Send Message</button>
			</form>
		</>
	);
}

export default Form;
