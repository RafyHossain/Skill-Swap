import toast from "react-hot-toast";

const BookSessionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    e.target.reset();
  };

  return (
    <div
      data-aos="fade-up"
      className="
        w-full
        max-w-sm sm:max-w-md md:max-w-lg
        mx-auto
        bg-base-100
        shadow-lg
        border
        rounded-xl
        p-5 sm:p-6 md:p-8
        mt-6
        animate__animated animate__fadeInUp
      "
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
        Book The Session
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="
            btn btn-primary w-full
            animate__animated
            hover:animate__pulse
            transition
          "
        >
          Book Session
        </button>
      </form>
    </div>
  );
};

export default BookSessionForm;
