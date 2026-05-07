"use client";

import { FormEvent, useState } from "react";

type FeedbackState = {
  message: string;
  kind: "error" | "success" | "idle";
};

const initialFeedback: FeedbackState = {
  message: "",
  kind: "idle"
};

export function ContactForm() {
  const [feedback, setFeedback] = useState<FeedbackState>(initialFeedback);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      number: String(formData.get("number") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      address: String(formData.get("address") || "").trim()
    };

    if (!payload.name || !payload.number || !payload.email || !payload.address) {
      setFeedback({
        message: "Please fill in name, number, email address, and address.",
        kind: "error"
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ message: "Sending your details...", kind: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { message?: string; ok?: boolean };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      form.reset();
      setFeedback({ message: "Send successful.", kind: "success" });
    } catch (error) {
      setFeedback({
        message: error instanceof Error ? error.message : "Could not send your details right now.",
        kind: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <label className="form-field">
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label className="form-field">
          <span>Number</span>
          <input type="tel" name="number" placeholder="Your phone number" required />
        </label>

        <label className="form-field form-field--full">
          <span>Email Address</span>
          <input type="email" name="email" placeholder="your@email.com" required />
        </label>

        <label className="form-field form-field--full">
          <span>Address</span>
          <textarea name="address" rows={4} placeholder="Your address" required />
        </label>
      </div>

      <button className="button button--solid" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Details"}
      </button>
      <p
        className={[
          "form-feedback",
          feedback.kind === "error" ? "is-error" : "",
          feedback.kind === "success" ? "is-success" : ""
        ]
          .filter(Boolean)
          .join(" ")}
        aria-live="polite"
      >
        {feedback.message}
      </p>
    </form>
  );
}
