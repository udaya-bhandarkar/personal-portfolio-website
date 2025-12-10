import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section id="contact-us" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4">Contact</h2>
          <p className="text-gray-400 text-sm sm:text-base">Let's create something amazing together</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">Let's Create Something Amazing Together</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white mb-1 text-sm sm:text-base">Email</div>
                  <div className="text-gray-400 text-xs sm:text-sm break-all">bhandarkar.udaya.2001@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white mb-1 text-sm sm:text-base">Phone</div>
                  <div className="text-gray-400 text-xs sm:text-sm">+44 7818 356477</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white mb-1 text-sm sm:text-base">Location</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Coventry, United Kingdom</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-blue-950/30 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-blue-500/20">
            <form className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Input 
                    placeholder="First Name" 
                    className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-gray-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Last Name" 
                    className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-gray-500 text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-gray-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-gray-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Message" 
                  rows={5}
                  className="bg-blue-950/50 border-blue-500/30 text-white placeholder:text-gray-500 resize-none text-sm sm:text-base"
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}