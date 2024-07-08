import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const questions = [
    {
      itemCount: 1,
      ques: "What are the visiting hours?",
      ans: "Visiting hours are 10:00 AM to 8:00 PM daily.",
    },
    {
      itemCount: 2,
      ques: "How do I schedule an appointment?",
      ans: "Call [Hospital's Phone Number] or use our online scheduling system.",
    },
    {
      itemCount: 3,
      ques: "What insurance plans are accepted?",
      ans: "We accept most major insurance plans, Medicare, and Medicaid.",
    },
    {
      itemCount: 4,
      ques: "What should I bring for my hospital stay?",
      ans: "Bring ID, insurance card, current medications list, and personal items.",
    },
    {
      itemCount: 5,
      ques: "How can I get a copy of my medical records?",
      ans: "Submit a request via our website or contact the Medical Records Department at [Phone Number].",
    },
  ];

  return (
    <div>
      <div>
        <Accordion type="single" collapsible>
          {
            questions.map((ques, idx) => {
                return <AccordionItem value={`item-${ques?.itemCount}`} key={idx}>
                <AccordionTrigger>{ques?.ques}</AccordionTrigger>
                <AccordionContent>
                    {ques?.ans}
                </AccordionContent>
              </AccordionItem>
            })
          }
        </Accordion>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default FAQ;
