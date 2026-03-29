import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

def get_openai_response(messages, model="gpt-4o-mini", temperature=0.7):
    """
    Get a response from OpenAI API.
    
    Args:
        messages (list): List of message dictionaries with 'role' and 'content'
        model (str): Model to use (default: gpt-4o-mini)
        temperature (float): Creativity parameter (0-1)
    
    Returns:
        str: The assistant's response
    """
    try:
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=temperature
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return None

if __name__ == "__main__":
    # Test the client
    test_messages = [
        {"role": "user", "content": "What is Python?"}
    ]
    answer = get_openai_response(test_messages)
    print(f"Response: {answer}")
