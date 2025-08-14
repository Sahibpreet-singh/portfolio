
export default function Contact() {
  return (
    <div
  id="contact"
  className="h-400 w-full bg-gray-900 bg-opacity-50  text-white flex flex-col md:flex-row items-center justify-center px-8 py-12"
>
  {/* 👤 Left: Image */}
  <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
    <img
      src="src\assets\gitpic.png"
      alt="Your portrait"
      className="shadow-lg w-60 h-60 object-cover scale-80"
    />
  </div>

  {/* 📱 Right: Contact Info */}
  <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
    <h2 className="text-4xl font-bold">Contact Me</h2>
    <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0">
      I am open for collaboration, freelance work, or just a friendly chat! Reach out to me through any of the platforms below.
    </p>

    <div className="space-y-3 text-lg">
      <p>
        📧 Email:{" "}
        <a
          href="mailto:Sahibpreetrai26@gmail.com"
          className="text-blue-400 hover:underline"
        >
          Sahibpreetrai26@gmail.com
        </a>
      </p>
      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sahibpreet-singh-b0577b217"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          linkedin.com/in/sahibpreet-singh-b0577b217
        </a>
      </p>
      <p>
        🐙 GitHub:{" "}
        <a
          href="https://github.com/Sahibpreet-singh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          github.com/Sahibpreet-singh
        </a>
      </p>
      
      <p>
        📞 Phone no:{" "}
        <a
          href="https://github.com/Sahibpreet-singh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          +91 9814133823
        
        </a>
      </p>
     
     
    </div>
  </div>
</div>

   
  );
}
