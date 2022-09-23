export function Header() {
  return (
    <>
      <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-wrap justify-between mb-8 md:mb-16">
          <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
              Find your
              <br />
              book online
            </h1>

            <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>
          </div>

          <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
              <img
                src="https://www.ghil.ac.uk/fileadmin/_processed_/1/6/csm_German-Historical-Institute-London_HR0024_e6c6419f96.jpg?auto=format&q=75&fit=crop&w=550&h=550"
                loading="lazy"
                alt="Photo by Kaung Htet"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="bg-gray-100 aspect-square rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://innovationinpolitics.eu/wp-content/uploads/2020/03/jaredd-craig-HH4WBGNyltc-unsplash-1024x1536.jpg?auto=format&q=75&fit=crop&w=550&h=50"
                loading="lazy"
                alt="Photo by Manny Moreno"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
