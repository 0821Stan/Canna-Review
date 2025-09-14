import ReviewForm from "../components/ReviewForm";

function DispensaryPage() {
  const reviews = [
    { id: 1, rating: 5, text: "Amazing products!", user: "alice" },
    { id: 2, rating: 3, text: "It was okay.", user: "bob" },
  ];

  function handleReviewSubmit(review) {
    console.log("New review:", review);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dispensary Name</h1>
      <p>123 Main St, San Salvador</p>

      <h2 className="mt-4 text-xl font-bold">Reviews</h2>
      <ul className="space-y-2">
        {reviews.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <strong>{r.user}</strong>: {r.text} ({r.rating}★)
          </li>
        ))}
      </ul>

      <h2 className="mt-4 text-xl font-bold">Add a Review</h2>
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
}

export default DispensaryPage;
