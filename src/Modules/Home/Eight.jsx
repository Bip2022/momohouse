function Eight() {
  return (
    <div className="relative pt-20 text-center">
      <iframe
        className="w-full h-[600px] border-none"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16007.690329410278!2d85.3295186129335!3d27.694684219034322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1737581810137!5m2!1sen!2snp"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>

      {/* Address in the middle of the map */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black w-64 h-40 p-4 shadow-md text-center font-bold text-lg flex items-center justify-center rounded-lg">
        New Baneshwor, Kathmandu, Bagmati, Nepal
      </div>
    </div>
  );
}

export default Eight;
