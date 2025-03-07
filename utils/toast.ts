import swal from "sweetalert2";

export const Toast = swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = swal.stopTimer;
    toast.onmouseleave = swal.resumeTimer;
  },
});

export const showSuccessToast = (message: string) => {
  Toast.fire({
    icon: "success",
    title: message || "Success!",
    customClass: {
      popup: "bg-white shadow-lg rounded-lg p-2",
      title: "text-base font-bold text-gray-900",
      icon: "rounded-full bg-green-400",
      timerProgressBar: "bg-green-500",
    },
  });
};

export const showErrorToast = (message: string) => {
  Toast.fire({
    icon: "error",
    title: message || "Something went wrong!",
    customClass: {
      popup: "bg-white shadow-lg rounded-lg p-2",
      title: "text-base font-bold text-gray-900",
      icon: "rounded-full bg-red-300",
      timerProgressBar: "bg-red-500",
    },
  });
};
