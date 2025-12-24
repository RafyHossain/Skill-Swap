import Swal from "sweetalert2";

const BookSessionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Session booked successfully!",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    
    e.target.reset();
  };

  return (
    <div className="card bg-base-100 shadow-md border p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">Book The Session</h3>

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

        
        <button type="submit" className="btn btn-primary w-full">
          Book Session
        </button>
      </form>
    </div>
  );
};

export default BookSessionForm;
