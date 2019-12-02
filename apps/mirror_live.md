# 1. Functional

An intelligent support system, that will reduce the number of support requests from your users using machine learning techniques

## 1.1 Terminology

### 1.1.1 Article
An article is similar to a post that describes solution to a single problem. It is alternately called as a FAQ (frequently asked question). List of all articles form the core part of knowledge base content

### 1.1.2 Article category
Articles are grouped by categories. Each article is associated with a category. Each category can have up to N number of articles associated under it (where N = (defaults to 5) upper limit set in the tenant by a tenant administrator)

### 1.1.3 Request
A user can post their question / problem onto the system for response from customer support. A request goes through a complete workflow lifecycle starting from user creating the request till problem resolution and review for possibile extraction into knowledge base

### 1.1.4 Tenant
A company / product / application that wants to use mirror application as a support and knowledge management system

## 1.2 Use case flow

### 1.2.1 Getting started
Create a tenant for your system in the app to get started

### 1.2.2 Workflow user
* User searches the question in the app
* Articles or answers related to the question is suggested as search results
** If any of the listed answers answered your question, then you say helpful and done
** If the listed answers are not relevant, then say not helpful. System will ask for more details and proceed to create a support request
* You can track your request and will be notified once you receive an answer 

### 1.2.3 Support person
* Support person based on levels, can read the request
* System will show more suggestions on related answers. If suggestions look good, you can tag it to the request and provide a personalized response 
* If suggestions are not fine and no matching articles in system, then provide a personalized answer and if possible contribute to the faq and tag the request to newly created article
* That ends the flow if user is satisfied. If not a back and forth communication as in other support systems 

### 1.2.4 Intelligence
* You can migrate the existing support systems into the new app with labeled dataset of requests and article categories. This will make the system intelligent from beginning
* As you start using the app live, learning will take place with growing number of requests. Both in case if a migrated tenant and a new tenant 

### 1.2.5 Customization
* Custom logo
* Custom banner
* Customized levels of support in the Workflow 
* Sla time specification at each support level
* User administration
* Tenant administration 
