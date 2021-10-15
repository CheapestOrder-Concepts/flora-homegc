const LoadingComponent = () => (
  <button class="btn btn-primary" type="button" disabled>
    <span
      class="spinner-grow spinner-grow-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Sending...
  </button>
);

export default LoadingComponent;
