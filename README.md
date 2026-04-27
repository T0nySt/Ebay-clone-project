# Bid-Bay
### "The Thrill of the Deal."

Bid-Bay is a full-stack web-based auction marketplace inspired by eBay. Built by a team of four, it serves as a dual-sided platform where users can list items for auction as sellers and place competitive bids as buyers.

🔗 **Live Demo:** [bidpay.netlify.app](https://bidpay.netlify.app)

---

## 👥 Team
- Raymond Huang, Tony Stone, Boris Maho, Prabodh KC.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Database | MongoDB |
| Deployment | Netlify |

---

## Features

- **Vehicles** – Browse and bid on vehicle listings
- **Furniture** – Filter by room category (Bedroom, Dining, Kitchen)
- **Technology** – Explore phones, consoles, and hardware with price filtering
- **Bidding System** – Bids only go through if they exceed the current highest bid; successful bids instantly update the listing
- **Sell Form** – Users can list their own items, which are immediately added to the correct category

---

## How It Works

* Bid-Bay is fully dynamic — no item data, prices, or descriptions are hardcoded in the HTML. Everything displayed on screen is pulled live from a MongoDB database via the Node.js/Express backend.

* When a user places a bid or adds a listing, the data is sent to the server and permanently stored, meaning the site stays accurate and consistent across refreshes and different devices.

---

## What I Learned

- Building a full-stack application from scratch with a real database
- Connecting a frontend UI to a REST API backend
- Dynamically rendering content from a database instead of hardcoding HTML
- Structuring a multi-category marketplace with filtering functionality
- Collaborating on a team project end-to-end

---

## Known Limitations

Due to time constraints, the following features were not fully implemented:
- Search bar functionality
- Full user authentication / sign-in

---

##  Notes

This is a student project built to demonstrate full-stack web development fundamentals. It is not intended to replicate all features of eBay.
