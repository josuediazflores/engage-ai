import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Josue I am designing a new application!
          
          
        </p>
        
      </section>
      
      
    </section>
  );
}