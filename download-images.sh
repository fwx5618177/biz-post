#!/bin/zsh

# Create directories if they don't exist
mkdir -p public/images/case-studies
mkdir -p public/images/testimonials

# E-commerce case study images
curl -o public/images/case-studies/ecommerce-hero.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/ecommerce-challenge.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/ecommerce-approach.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/ecommerce-solution.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/ecommerce-gallery1.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/ecommerce-gallery2.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/ecommerce-gallery3.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/ecommerce-gallery4.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634

# Mobile banking case study images
curl -o public/images/case-studies/mobile-banking-hero.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/banking-challenge.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/banking-approach.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/banking-solution.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/banking-gallery1.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/banking-gallery2.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/banking-gallery3.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/banking-gallery4.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634

# Healthcare case study images
curl -o public/images/case-studies/healthcare-hero.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/healthcare-challenge.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/healthcare-approach.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/healthcare-solution.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/healthcare-gallery1.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/healthcare-gallery2.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/healthcare-gallery3.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/case-studies/healthcare-gallery4.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634

# Testimonial images
curl -o public/images/testimonials/sarah.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634
curl -o public/images/testimonials/michael.jpg https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d3eb30-8d63-4b09-a992-664bbfed7634

echo "All images downloaded successfully!" 