// import React, { useState } from "react";
// import { Send, X, Phone, Mail } from "lucide-react";

// const ContactUs = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   }); 

//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     let errors = {};
//     if (!formData.name) errors.name = "Name is required";
//     if (!formData.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email address is invalid";
//     }
//     if (!formData.message) errors.message = "Message is required";
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     if (Object.keys(errors).length === 0) {
//       setIsSubmitted(true);
//       setTimeout(() => onClose(), 3000);
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/60 backdrop-blur-sm">
//       <div className="relative bg-white w-full max-w-sm rounded-2xl shadow-2xl transform transition-all duration-300 ease-out overflow-hidden">
//         {/* Close button - Moved outside gradient header */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 z-50 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors duration-200"
//         >
//           <X className="w-5 h-5 text-white" />
//         </button>

//         {/* Header - Reduced padding */}
//         <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-4">
//           <h2 className="text-2xl font-bold text-white text-center">Contact Us</h2>
//           <p className="text-white/80 text-center text-sm">
//             We're here to assist you
//           </p>
//         </div>

//         {/* Form Container - Reduced padding */}
//         <div className="p-4">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 placeholder="Name"
//               />
//               {formErrors.name && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 placeholder=""
//               />
//               {formErrors.email && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 placeholder="How can we help?"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="3"
//                 className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 placeholder="Write your message here..."
//               />
//               {formErrors.message && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity duration-200"
//             >
//               <Send className="w-4 h-4" />
//               <span>Send Message</span>
//             </button>
//           </form>

//           {/* Contact Info - Simplified */}
//           <div className="mt-4 text-center text-sm text-gray-600">
//             <p className="mb-2">Need immediate assistance?</p>
//             <div className="flex justify-center space-x-4 text-sm">
//               <a
//                 href="tel:+919828879333"
//                 className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
//               >
//                 <Phone className="w-4 h-4" />
//                 <span>+91 98288 79333</span>
//               </a>
//               <a
//                 href="mailto:contactus@hotelhighwayking.com"
//                 className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
//               >
//                 <Mail className="w-4 h-4" />
//                 <span>Email Us</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;