// English translations of the services visible on the supplied clinic signboard.
export const services = [
  {
    "slug": "dentist-consultation",
    "title": "Dental Check-up",
    "text": "Dental examination and consultation about your oral health.",
    "category": "Assessment",
    "icon": "chat",
    "items": [
      "Discuss your concerns",
      "Review your dental history",
      "Plan your next steps"
    ],
    "image": "/images/services/dentist-consultation.webp"
  },
  {
    "slug": "teeth-cleaning",
    "title": "Teeth Cleaning & Scaling",
    "text": "Professional teeth cleaning and scaling.",
    "category": "Everyday Care",
    "icon": "spark",
    "items": [
      "Discuss cleaning needs",
      "Arrange a cleaning visit",
      "Ask about oral hygiene"
    ],
    "image": "/images/services/teeth-cleaning.webp"
  },
  {
    "slug": "tooth-fillings",
    "title": "Dental Fillings",
    "text": "Fillings for teeth affected by cavities or damage.",
    "category": "Everyday Care",
    "icon": "tooth",
    "items": [
      "Arrange a tooth assessment",
      "Discuss filling options",
      "Ask about treatment costs"
    ],
    "image": "/images/services/tooth-fillings.webp"
  },
  {
    "slug": "tooth-extractions",
    "title": "Tooth Extraction",
    "text": "Removal of a tooth following a dental assessment.",
    "category": "Treatment & Repair",
    "icon": "tooth",
    "items": [
      "Assess the affected tooth",
      "Discuss the procedure",
      "Ask about aftercare"
    ],
    "image": "/images/services/tooth-extractions.webp"
  },
  {
    "slug": "crowns-bridges",
    "title": "Dental Crowns",
    "text": "Dental caps to cover and restore a tooth.",
    "category": "Treatment & Repair",
    "icon": "tooth",
    "items": [
      "Discuss a damaged tooth",
      "Ask about crown options",
      "Plan your appointments"
    ],
    "image": "/images/services/crowns-bridges.webp"
  },
  {
    "slug": "root-canals",
    "title": "Root Canal Treatment",
    "text": "Treatment for the root of an affected tooth.",
    "category": "Treatment & Repair",
    "icon": "plus",
    "items": [
      "Assess the affected tooth",
      "Discuss the treatment plan",
      "Arrange follow-up care"
    ],
    "image": "/images/services/root-canals.webp"
  },
  {
    "slug": "teeth-whitening",
    "title": "Teeth Whitening",
    "text": "Whitening options for a brighter-looking smile.",
    "category": "Smile & Alignment",
    "icon": "spark",
    "items": [
      "Discuss your smile goals",
      "Review whitening suitability",
      "Ask about aftercare"
    ],
    "image": "/images/services/teeth-whitening.webp"
  },
  {
    "slug": "bleeding-gums",
    "title": "Bleeding Gums Treatment",
    "text": "Assessment and care for bleeding gums.",
    "category": "Everyday Care",
    "icon": "heart",
    "items": [
      "Share your gum concerns",
      "Arrange a gum assessment",
      "Discuss ongoing care"
    ],
    "image": "/images/services/bleeding-gums.webp"
  },
  {
    "slug": "bad-breath",
    "title": "Bad Breath Treatment",
    "text": "Assessment and care for persistent bad breath.",
    "category": "Everyday Care",
    "icon": "chat",
    "items": [
      "Discuss your concerns",
      "Arrange an oral examination",
      "Ask about care options"
    ],
    "image": "/images/services/bad-breath.webp"
  },
  {
    "slug": "tooth-gap-closure",
    "title": "Tooth Gap Closure",
    "text": "Options for closing spaces between teeth.",
    "category": "Smile & Alignment",
    "icon": "tooth",
    "items": [
      "Discuss gaps in your teeth",
      "Explore suitable options",
      "Request a treatment plan"
    ],
    "image": "/images/services/tooth-gap-closure.webp"
  },
  {
    "slug": "orthodontics",
    "title": "Teeth Straightening",
    "text": "Orthodontic options for crooked or misaligned teeth.",
    "category": "Smile & Alignment",
    "icon": "tooth",
    "items": [
      "Discuss tooth alignment",
      "Ask about suitable options",
      "Plan your treatment visits"
    ],
    "image": "/images/services/orthodontics.webp"
  },
  {
    "slug": "jaw-fracture-treatment",
    "title": "Jaw Fracture Treatment",
    "text": "Assessment and treatment planning for a fractured jaw.",
    "category": "Treatment & Repair",
    "icon": "plus",
    "items": [
      "Discuss the injury",
      "Arrange an assessment",
      "Confirm treatment arrangements"
    ],
    "image": "/images/services/jaw-fracture-treatment.webp"
  },
  {
    "slug": "laser-filling",
    "title": "Laser Filling",
    "text": "Laser filling, as listed among the clinic’s services.",
    "category": "Treatment & Repair",
    "icon": "spark",
    "items": [
      "Ask about the procedure",
      "Discuss suitability",
      "Confirm treatment details"
    ],
    "image": "/images/services/laser-filling.webp"
  },
  {
    "slug": "dental-x-rays",
    "title": "Dental X-rays",
    "text": "Dental imaging to support your dentist’s assessment.",
    "category": "Assessment",
    "icon": "plus",
    "items": [
      "Discuss imaging needs",
      "Arrange your visit",
      "Review findings with your dentist"
    ],
    "image": "/images/services/dental-x-rays.webp"
  }
];

// Treatment-scene assets shared by related services.
const practiceScenes = {
  'dentist-consultation': 'examination',
  'teeth-cleaning': 'cleaning',
  'tooth-fillings': 'restoration',
  'tooth-extractions': 'extraction',
  'crowns-bridges': 'restoration',
  'root-canals': 'root-canal',
  'teeth-whitening': 'whitening',
  'bleeding-gums': 'cleaning',
  'bad-breath': 'examination',
  'tooth-gap-closure': 'orthodontics',
  'orthodontics': 'orthodontics',
  'jaw-fracture-treatment': 'imaging',
  'laser-filling': 'restoration',
  'dental-x-rays': 'imaging',
};

export function practiceImageFor(service) {
  return `/images/practice/${practiceScenes[service.slug] || 'examination'}.webp`;
}
