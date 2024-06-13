#include <stdio.h>
#include <stdlib.h>

// Structure for the list element: stores a single digit
struct Element {
    int value;
    struct Element* successor;
};

// Function to create a new element with the given value
struct Element* createElement(int value) {
    struct Element* newElement = (struct Element*) malloc(sizeof(struct Element));
    newElement->value = value;
    newElement->successor = NULL;
    return newElement;
}

// Function to add an element at the beginning of the list (prepend)
void prepend(struct Element** head, int item) {
    struct Element* element = createElement(item);
    element->successor = *head;
    *head = element;
}

// Function to remove an element from the beginning of the list (removeFirst)
void removeFirst(struct Element** head) {
    if (*head == NULL) {
        printf("Deque is empty.\n");
        return;
    }
    struct Element* temp = *head;
    *head = (*head)->successor;
    free(temp);
}

// Function to add an element at the end of the list (append)
void append(struct Element** head, int item) {
    if (*head == NULL) {
        *head = createElement(item);
        return;
    }
    struct Element* temp = *head;
    while (temp->successor != NULL)
        temp = temp->successor;
    temp->successor = createElement(item);
}

// Function to remove an element from the end of the list (removeLast)
void removeLast(struct Element** head) {
    if (*head == NULL) {
        printf("Deque is empty.\n");
        return;
    }
    if ((*head)->successor == NULL) {
        free(*head);
        *head = NULL;
        return;
    }
    struct Element* penultimate = *head;
    while (penultimate->successor->successor != NULL)
        penultimate = penultimate->successor;
    free(penultimate->successor);
    penultimate->successor = NULL;
}

// Function to display the list (display)
void display(struct Element* head) {
    struct Element* temp = head;
    while (temp != NULL) {
        printf("%d ", temp->value);
        temp = temp->successor;
    }
    printf("\n");
}

// Function to clear the contents of the list (clear)
void clear(struct Element** head) {
    struct Element* current = *head;
    struct Element* next;
    while (current != NULL) {
        next = current->successor;
        free(current);
        current = next;
    }
    *head = NULL;
}

// Main function to test above functions
int main() {
    struct Element* deque = NULL;
    int option, item;
    do {
        printf("\nEnter an option:\n");
        printf("[1] push or prepend\n");
        printf("[2] pop or removeFirst\n");
        printf("[3] inject or append\n");
        printf("[4] eject or removeLast\n");
        printf("[5] print or display\n");
        printf("[6] makeEmpty of clear\n");
        printf("[7] exit\n");
        scanf("%d", &option);
        switch (option) {
            case 1:
                printf("Enter the item to be inserted: ");
                scanf("%d", &item);
                prepend(&deque, item);
                break;
            case 2:
                removeFirst(&deque);
                break;
            case 3:
                printf("Enter the item to be inserted: ");
                scanf("%d", &item);
                append(&deque, item);
                break;
            case 4:
                removeLast(&deque);
                break;
            case 5:
                display(deque);
                break;
            case 6:
                clear(&deque);
                break;
            case 7:
                exit(0);
            default:
                printf("Invalid option.\n");
        }
    } while (1);
    return 0;
}
