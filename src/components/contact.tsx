const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted h-[100dvh] flex items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or just want tot talk? Feel free to reach out to me.
            </p>
          </div>
          <a
            href="mailto:contact@rowanpaulflynn.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="text-2xl hover:underline"
          >
            contact@rowanpaulflynn.com
          </a>
          {/* <div className="w-full max-w-sm mx-auto space-y-2">
            <form className="flex flex-col gap-2">
              <Input type="text" placeholder="Name" className="flex-1 max-w-lg" />
              <Input type="email" placeholder="Email" className="flex-1 max-w-lg" />
              <Textarea placeholder="Message" className="flex-1 max-w-lg" />
              <Button type="submit">Submit</Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
