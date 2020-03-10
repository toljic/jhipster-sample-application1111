package rs.synsoft.ala.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import rs.synsoft.ala.domain.Authority;

/**
 * Spring Data MongoDB repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {}
