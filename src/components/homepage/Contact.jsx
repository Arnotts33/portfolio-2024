import Form from "../ui/Form";
import styles from "./Contact.module.css";

function Contact() {
	return (
		<section className={styles.contact__section}>
			<div className={styles.contact__container}>
				<h1>Get In Touch</h1>
				<p>
					I am open to work and looking for freelance opportunities or
					a position in startups, agencies and design studios.
				</p>
			</div>
			<div className={styles.contact__form_container}>
				<Form />
			</div>
		</section>
	);
}

export default Contact;
