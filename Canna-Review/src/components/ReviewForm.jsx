import { useState } from "react";

function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ rating, text });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label>
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="ml-2 border p-1"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        className="w-full border p-2"
      />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
